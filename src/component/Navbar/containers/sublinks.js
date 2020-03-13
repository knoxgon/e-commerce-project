const links = [
  //Parlor
  {
    PARLOR: [
      { name: "Sofa", route: "/parlor/sofa" },
      { name: "Corner sofa", route: "/parlor/corner-sofa" },
      { name: "TV bench", route: "/parlor/tv-bench" },
      { name: "Coffee table", route: "/parlor/coffee-table" }
    ]
  },
];

export const dedicateLinkPage = (id) => {
  // -> prep to stream links[] elements through pipeline
  // -> filter target id
  // -> get first (only) element
  // -> target id
  // -> map and return matched element array
  return Object.values(links).filter(set => set[id])[0][id].map(elem => elem)
}
