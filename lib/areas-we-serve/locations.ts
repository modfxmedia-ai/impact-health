/**
 * The 19 locations in the "Areas We Serve" programmatic matrix. Every
 * location is a real place patients travel FROM to reach the single
 * Impact Health & Wellness office in Westerville, OH — there is no
 * satellite office in any of these cities. Drive times/distances were
 * verified via live driving directions from the office
 * (193 W. Schrock Rd, Westerville, OH 43081); `blurb` facts are limited
 * to public, well-known, non-medical geography/landmarks so nothing is
 * fabricated.
 */
export interface AreaLocation {
  slug: string;
  name: string;
  /** Sub-area grouping used by the Areas We Serve hub directory (not a real administrative boundary, just a sensible regional cluster). */
  region: string;
  /** Approximate one-way drive time from the Westerville office, in minutes. */
  driveTimeMinutes: number;
  /** Approximate one-way drive distance from the Westerville office, in miles. */
  driveDistanceMiles: number;
  /** True only for Westerville itself — the home base gets different intro framing (no "patients travel from here" language). */
  isHomeBase?: boolean;
  /** Short, factual, non-medical blurb (public landmarks/geography only). */
  blurb: string;
  /** Slugs of 2-3 nearby locations, for internal cross-linking. */
  nearby: string[];
}

export const areaLocations: AreaLocation[] = [
  {
    slug: "westerville",
    name: "Westerville",
    region: "Westerville & Central Columbus",
    driveTimeMinutes: 0,
    driveDistanceMiles: 0,
    isHomeBase: true,
    blurb:
      "Our Westerville office sits in the heart of the city known as the \"City of Cheer\" for its holiday light displays and historic Uptown Westerville district.",
    nearby: ["gahanna", "worthington", "powell"],
  },
  {
    slug: "columbus",
    name: "Columbus",
    region: "Westerville & Central Columbus",
    driveTimeMinutes: 20,
    driveDistanceMiles: 11,
    blurb:
      "Ohio's capital and largest city, home to Ohio State University and the broader Central Ohio metro our patients come from.",
    nearby: ["worthington", "upper-arlington", "gahanna"],
  },
  {
    slug: "dublin",
    name: "Dublin",
    region: "West & Northwest Suburbs",
    driveTimeMinutes: 20,
    driveDistanceMiles: 12.7,
    blurb:
      "Known for hosting the Memorial Tournament on the PGA Tour and its Dublin City Schools district.",
    nearby: ["hilliard", "upper-arlington", "powell"],
  },
  {
    slug: "worthington",
    name: "Worthington",
    region: "Westerville & Central Columbus",
    driveTimeMinutes: 14,
    driveDistanceMiles: 5.3,
    blurb:
      "One of Ohio's oldest planned communities, with a historic village green in Old Worthington.",
    nearby: ["westerville", "upper-arlington", "columbus"],
  },
  {
    slug: "gahanna",
    name: "Gahanna",
    region: "Northeast Suburbs",
    driveTimeMinutes: 15,
    driveDistanceMiles: 9.6,
    blurb:
      "A Franklin County suburb known for its Creekside entertainment district along Big Walnut Creek.",
    nearby: ["westerville", "new-albany", "reynoldsburg"],
  },
  {
    slug: "new-albany",
    name: "New Albany",
    region: "Northeast Suburbs",
    driveTimeMinutes: 16,
    driveDistanceMiles: 10.1,
    blurb:
      "Known for its Georgian-style architecture and the New Albany-Plain Local School District.",
    nearby: ["gahanna", "johnstown", "westerville"],
  },
  {
    slug: "reynoldsburg",
    name: "Reynoldsburg",
    region: "Northeast Suburbs",
    driveTimeMinutes: 24,
    driveDistanceMiles: 16.2,
    blurb: "A Franklin County suburb historically celebrated as the \"Birthplace of the Tomato.\"",
    nearby: ["gahanna", "pickerington", "blacklick"],
  },
  {
    slug: "blacklick",
    name: "Blacklick",
    region: "Northeast Suburbs",
    driveTimeMinutes: 23,
    driveDistanceMiles: 14.3,
    blurb:
      "An unincorporated community near Rocky Fork Metro Park, straddling the Franklin/Licking county line.",
    nearby: ["reynoldsburg", "pickerington", "new-albany"],
  },
  {
    slug: "lewis-center",
    name: "Lewis Center",
    region: "North & Delaware County",
    driveTimeMinutes: 23,
    driveDistanceMiles: 10.1,
    blurb: "Part of Orange Township in Delaware County, near Alum Creek State Park.",
    nearby: ["powell", "westerville", "sunbury"],
  },
  {
    slug: "powell",
    name: "Powell",
    region: "North & Delaware County",
    driveTimeMinutes: 24,
    driveDistanceMiles: 10.9,
    blurb: "Home to the Columbus Zoo and Aquarium along the Scioto River.",
    nearby: ["lewis-center", "dublin", "westerville"],
  },
  {
    slug: "sunbury",
    name: "Sunbury",
    region: "North & Delaware County",
    driveTimeMinutes: 27,
    driveDistanceMiles: 11.2,
    blurb:
      "Seat of the Big Walnut Local School District, near Hoover Reservoir and Alum Creek State Park — also serving nearby Galena.",
    nearby: ["lewis-center", "powell", "johnstown"],
  },
  {
    slug: "hilliard",
    name: "Hilliard",
    region: "West & Northwest Suburbs",
    driveTimeMinutes: 27,
    driveDistanceMiles: 15.9,
    blurb: "A fast-growing western suburb home to Hilliard City Schools.",
    nearby: ["dublin", "upper-arlington", "grove-city"],
  },
  {
    slug: "upper-arlington",
    name: "Upper Arlington",
    region: "Westerville & Central Columbus",
    driveTimeMinutes: 22,
    driveDistanceMiles: 13.5,
    blurb: "An established, tree-lined residential suburb bordering Ohio State University.",
    nearby: ["columbus", "worthington", "hilliard"],
  },
  {
    slug: "grove-city",
    name: "Grove City",
    region: "West & Northwest Suburbs",
    driveTimeMinutes: 38,
    driveDistanceMiles: 28.0,
    blurb: "A southwest Columbus suburb known for its historic Town Center district.",
    nearby: ["hilliard", "columbus", "canal-winchester"],
  },
  {
    slug: "johnstown",
    name: "Johnstown",
    region: "Licking County",
    driveTimeMinutes: 28,
    driveDistanceMiles: 19.4,
    blurb: "A small-town community in Licking County, northeast of Columbus.",
    nearby: ["new-albany", "sunbury", "pataskala"],
  },
  {
    slug: "pataskala",
    name: "Pataskala",
    region: "Licking County",
    driveTimeMinutes: 29,
    driveDistanceMiles: 20.1,
    blurb: "A Licking County city along the US-40 corridor east of Columbus.",
    nearby: ["johnstown", "new-albany", "canal-winchester"],
  },
  {
    slug: "delaware",
    name: "Delaware",
    region: "North & Delaware County",
    driveTimeMinutes: 35,
    driveDistanceMiles: 21.7,
    blurb: "The Delaware County seat and home to Ohio Wesleyan University.",
    nearby: ["sunbury", "powell", "lewis-center"],
  },
  {
    slug: "canal-winchester",
    name: "Canal Winchester",
    region: "Southeast Suburbs",
    driveTimeMinutes: 36,
    driveDistanceMiles: 26.0,
    blurb: "A southeast Columbus suburb with a historic canal-era downtown.",
    nearby: ["pickerington", "grove-city", "reynoldsburg"],
  },
  {
    slug: "pickerington",
    name: "Pickerington",
    region: "Southeast Suburbs",
    driveTimeMinutes: 37,
    driveDistanceMiles: 22.7,
    blurb: "Home to Pickerington Local Schools and Violet Township, southeast of Columbus.",
    nearby: ["reynoldsburg", "canal-winchester", "blacklick"],
  },
];

export function getLocationBySlug(slug: string): AreaLocation | undefined {
  return areaLocations.find((location) => location.slug === slug);
}

export function getNearbyLocations(location: AreaLocation, count = 3): AreaLocation[] {
  return location.nearby
    .map((slug) => getLocationBySlug(slug))
    .filter((l): l is AreaLocation => Boolean(l))
    .slice(0, count);
}

/** Ordered list of unique regions, in the order they first appear in `areaLocations` — drives the hub directory's group order. */
export const areaRegions: string[] = Array.from(
  new Set(areaLocations.map((location) => location.region)),
);
