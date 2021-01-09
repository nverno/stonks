import $ from 'jquery';
import _ from 'lodash';
import searchMenu from './search_menu.ejs';
import searchMenuSection from './search_menu_section.ejs';
import './search.scss';

// Note: av is the API currently defined on the window!

const splitByMatches = (q, str) => {
  if (q.length === 0) return [];
  let m,
    i = 0,
    parts = [];
  const re = new RegExp(q, 'ig');

  while ((m = re.exec(str)) && i < str.length) {
    m.index > 0 &&
      parts.push({
        match: false,
        value: str.slice(i, m.index),
      });
    parts.push({
      match: true,
      value: str.slice(m.index, m.index + q.length),
    });
    i = m.index + q.length;
  }

  i < str.length &&
    parts.push({
      match: false,
      value: str.slice(i),
    });

  return parts;
};

const formatResults = (query, results) => {
  return results.map((result) => {
    const { symbol, name, type, region } = result;
    return {
      value: symbol,
      symbol: splitByMatches(query, symbol),
      name: splitByMatches(query, name),
      type,
      region,
    };
  });
};

const createMenu = (query, results) => {
  let searchResults = $('.search-results');
  searchResults.empty();
  let [stocks, funds] = _.partition(formatResults(query, results), [
    'type',
    'Equity',
  ]);
  console.log('stocks: ', stocks);
  console.log('funds: ', funds);

  searchResults.append(
    searchMenu({
      stocks,
      funds,
      searchMenuSection: searchMenuSection,
    })
  );
};

export async function handleSearch(e) {
  e.preventDefault();
  const searchInput = $('.search-input');
  const query = searchInput.val();
  searchInput.val('');

  if (query.length) {
    let results = await window.av.search(query);
    console.log('results: ', results);
    if (results.length === 1) {
      $('.search-results').empty();
      // TODO: use Object.values(results)[0].symbol
    } else {
      createMenu(query, results);
    }
  } else {
    $('.search-results').empty();
  }
}
