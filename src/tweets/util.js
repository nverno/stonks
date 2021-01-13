import _ from 'lodash';
const none = (arr, fn = Boolean) => !arr.some(fn);

export const cleanTweets = (tag, { data, meta }) => {
  const t = tag.toUpperCase();
  let tags = new Set();
  let res = [];

  for (let ele of data) {
    if (
      !(
        ele.entities &&
        ele.entities.cashtags &&
        none(ele.entities.cashtags, (e) => e === t)
      )
    )
      continue;

    ele.entities.cashtags.forEach((e) => tags.add(e));
    const { id, text, created_at } = ele;
    res.push({
      id,
      text,
      createdAt: new Date(created_at),
    });
  }

  return {
    meta,
    tags,
    data: res,
  };
};

export const groupByHour = ({ data }) => {
  const groups = _.groupBy(data, ({ createdAt }) => {
    let d = new Date(createdAt);
    d.setMinutes(0);
    d.setSeconds(0);
    return d;
  });

  return {
    groups,
    grouped: Object.keys(groups).map((key) => ({
      name: key,
      value: groups[key].length,
    })),
  };
};

export const groupByMinutes = ({ data }, minutes) => {
  const groups = _.groupBy(data, ({ createdAt }) => {
    let d = new Date(createdAt);
    const mins = Math.floor(d.getMinutes() / minutes);
    d.setMinutes(d.getMinutes() - mins);
    d.setSeconds(0);
    return d;
  });

  return {
    groups,
    grouped: Object.keys(groups).map((key) => ({
      name: key,
      value: groups[key].length,
    })),
  };
};
