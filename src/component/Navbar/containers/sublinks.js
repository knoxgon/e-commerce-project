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
  //Bedroom
  {
    BEDROOM: [
      { name: "Mattress", route: "/bedroom/mattress" },
      { name: "Chest bed", route: "/bedroom/chest-bed" },
      { name: "Cushion", route: "/bedroom/cushion" }
    ]
  },
  //Kitchen
  {
    KITCHEN: [
      { name: "Cabinet", route: "/kitchen/cabinet" },
      { name: "Shelf", route: "/kitchen/shelf" },
      { name: "Dining table set", route: "/kitchen/dining" }
    ]
  },
  //Kidsroom
  {
    KIDSROOM: [
      { name: "Nursery furniture sets", route: "/kitchen/nursery-set" },
      { name: "Desk", route: "/kitchen/desk" },
      { name: "Shelf set", route: "/kitchen/shelf-set" }
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
