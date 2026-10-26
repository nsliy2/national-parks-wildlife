// charts
// shared options: no action menu, no extra padding, and more space around chart titles
const opts = {
  actions: false,
  padding: 0,
  config: { title: { subtitlePadding: 6, offset: 18 } }
};

vegaEmbed('#map1', 'js/map1.vg.json', opts);
vegaEmbed('#dumbbell', 'js/dumbbell.vg.json', opts);
vegaEmbed('#bioregion', 'js/bioregion.vg.json', opts);
vegaEmbed('#map2', 'js/map2.vg.json', opts);
vegaEmbed('#waffle', 'js/waffle.vg.json', opts);
vegaEmbed('#heatmap', 'js/heatmap.vg.json', opts);
vegaEmbed('#lollipop', 'js/lollipop.vg.json', opts);
vegaEmbed('#stacked', 'js/stacked.vg.json', opts);
vegaEmbed('#binmap', 'js/binmap.vg.json', opts);
vegaEmbed('#jitter', 'js/jitter.vg.json', opts);
vegaEmbed('#slope', 'js/slope.vg.json', opts);