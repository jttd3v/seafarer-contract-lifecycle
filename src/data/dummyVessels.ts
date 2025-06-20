
export type VesselParticulars = {
  name: string;
  imo: string;
  flag: string;
  type: "Bulk Carrier" | "Reefer Ship";
  dwt: number;
  built: number;
  owner: string;
};

export const vessels: VesselParticulars[] = [
  {
    name: "MV Cherry Queen",
    imo: "9897654",
    flag: "Philippines",
    type: "Bulk Carrier",
    dwt: 51000,
    built: 2016,
    owner: "Malaya Maritime Corp"
  },
  {
    name: "MT Pacific Eagle",
    imo: "9876543",
    flag: "Panama",
    type: "Reefer Ship",
    dwt: 73000,
    built: 2019,
    owner: "Eagle Tankers PLC"
  },
  {
    name: "MV Southern Phoenix",
    imo: "9831234",
    flag: "Liberia",
    type: "Bulk Carrier",
    dwt: 42500,
    built: 2014,
    owner: "South Star Shipping"
  },
  {
    name: "MV Carabao Spirit",
    imo: "9811122",
    flag: "Marshall Islands",
    type: "Reefer Ship",
    dwt: 28000,
    built: 2012,
    owner: "Manila Oceanic Lines"
  },
  {
    name: "MT Pearl of Cebu",
    imo: "9789900",
    flag: "Singapore",
    type: "Bulk Carrier",
    dwt: 15500,
    built: 2018,
    owner: "Pearl Maritime Inc"
  }
];
