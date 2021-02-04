export const isIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

export const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});

export const fmt = (n) =>
  n.toLocaleString('en', {
    maximumFractionDigits: 2,
  });

export const fmtPrice = (price) =>
  (!price && '—') || price < 0 ? '-$' + fmt(Math.abs(price)) : '$' + fmt(price);

export const fmtPercent = (price) => (price ? fmt(price) + '%' : '—');

export const fmtClass = (price) =>
  price && price > 0 ? 'positive' : 'negative';
