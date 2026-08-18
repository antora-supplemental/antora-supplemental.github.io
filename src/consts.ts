export const DOCS_URL = "https://docs.antora-supplemental.org/";
export const REGISTRY_URL = "https://registry.antora-supplemental.org/";
export const REGISTRY_CONTRIBUTE_URL = "https://docs.antora-supplemental.org/registry/contributing.html";
export const GITHUB_ORG_URL = "https://github.com/antora-supplemental";
export const SITE_SOURCE_URL =
  "https://github.com/antora-supplemental/antora-supplemental.github.io";
export const ANTORA_URL = "https://antora.org/";
export const CONTACT_EMAIL = "support@antora-supplemental.org";

/** Owned peer orgs (this org omitted). Prefer each org’s public site; GitHub when no site resolves. */
export const SIBLING_ORGS = [
  { name: "connectome-fs", href: "https://connectome-fs.github.io/connectome-fs/" },
  { name: "DevCentr", href: "https://devcentr.org/" },
  { name: "dlang-supplemental", href: "https://dlang-supplemental.github.io/" },
  { name: "Food Truck Nerdz", href: "https://www.foodtrucknerdz.com/" },
  { name: "formatte", href: "https://github.com/formatte" },
  { name: "HCI Nerdz", href: "https://hci-nerdz.github.io/" },
  { name: "LinxPhotos", href: "https://linx.photos/" },
  { name: "Nonprofit Resources", href: "https://nonprofit-resources.org/" },
  { name: "OpenShellOrg", href: "https://openshellorg.github.io/" },
  { name: "PolyglotScan", href: "https://polyglotscan.com/" },
  { name: "RepoLabs", href: "https://repolabs.dev/" },
] as const;
