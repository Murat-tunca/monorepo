export const Logo = ({ height, width }: { height: number; width: number }) => {
  return (
    <img
      src="https://kampus-logo.s3.eu-central-1.amazonaws.com/kampus_logo.png"
      style={{ height: `${height}px`, width: `${width}px` }}
      alt="logo"
    />
  );
};

export const DiscordIcon = () => {
  return (
    <img
      className="h-6 w-6"
      src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
      alt="DiscordIcon"
    />
  );
};
