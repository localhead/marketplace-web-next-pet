declare module "*.woff";

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const value: string;

  export default value;
}
