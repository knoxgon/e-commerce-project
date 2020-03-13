const links = [
  //Parlor
  {
    PARLOR: [
      { name: "Sofa", route: "/parlor/sofa" },
      { name: "Corner sofa", route: "/parlor/corner-sofa" },
      { name: "TV bench", route: "/parlor/tv-bench" },
      { name: "Coffee table", route: "/parlor/coffee-table" }
    ],
    assets: [
      { picture: require("../../../assets/trails/parlor/sofa.jpg") },
      { picture: require("../../../assets/trails/parlor/cornersofa.jpg") },
      { picture: require("../../../assets/trails/parlor/tv.jpg") },
      { picture: require("../../../assets/trails/parlor/table.jpg") }
    ]
  },
  //Bedroom
  {
    BEDROOM: [
      { name: "Mattress", route: "/bedroom/mattress" },
      { name: "Chest bed", route: "/bedroom/chest-bed" },
      { name: "Cushion", route: "/bedroom/cushion" }
    ],
    assets: [
      { picture: require("../../../assets/trails/bedroom/cushion.jpg") },
      { picture: require("../../../assets/trails/bedroom/mattress.jpg") },
      { picture: require("../../../assets/trails/bedroom/chestbed.jpg") },
      { picture: require("../../../assets/trails/bedroom/cushion2.jpg") },
    ]
  }
];

export const dedicateLinkPage = (id) => {
  // -> prep to stream links[] elements through pipeline
  // -> filter target id
  // -> get first (only) element
  // -> target id
  // -> map and return matched element array
  return Object.values(links).filter(set => set[id])[0][id].map(elem => elem)
}

export const cherryPickAssets = (id) => {
  return Object.values(links).filter(set => set[id])[0]['assets'].map(a => a.picture)
}