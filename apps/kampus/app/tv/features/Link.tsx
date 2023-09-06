import { Disc2Icon, Disc3Icon, DiscIcon, GithubIcon, TwitchIcon, TwitterIcon } from "lucide-react";

import { Label } from "@kampus/ui-next";

import { DiscordIcon } from "./Logo";

type TwitchLinkProps = {
  streamer: {
    username: string;
    // live: boolean;
    // startedAt: string;
    // viewerCount: number;
  };
};

export const TwitchLink = ({ streamer }: TwitchLinkProps) => {
  return (
    <div className=" bg-indigo-500 p-5">
      <a href={`https://twitch.tv/${streamer.username}`} className="underline underline-offset-2">
        <div className="flex  items-center gap-1 ">
          <TwitchIcon />
          {streamer.username}
        </div>
      </a>
      {/* {streamer.live && (
        <div className="items-center">
          <div className="h-3 w-3 rounded-full bg-red-600" />
          <Label className="text-slate-500">{streamer.viewerCount}</Label>
        </div>
      )} */}
    </div>
  );
};

export const TwitterLink = ({ username }: { username: string }) => {
  return (
    <a
      href={`https://twitter.com/${username}`}
      className="text-slate-300 underline underline-offset-2 "
    >
      <div className=" flex items-center bg-sky-500 p-5">
        <TwitterIcon />
        {username}
      </div>
    </a>
  );
};

export const DiscordLink = () => {
  return (
    <a href="https://discord.kamp.us">
      <div className="flex justify-between  border border-gray-400 p-5 underline underline-offset-2">
        <DiscordIcon /> Kamp.us Discord'una katıl
      </div>
    </a>
  );
};

export const GithubLink = ({ username }: { username: string }) => {
  return (
    <a href={`https://github.com/${username}`}>
      <div className="flex items-center  bg-neutral-500 p-5 underline underline-offset-2">
        <GithubIcon />
        {username}
      </div>
    </a>
  );
};

export const KampusGithubLink = () => {
  return (
    <a href={`https://github.com/kamp-us/monorepo`}>
      <div className="flex justify-between border border-neutral-500 bg-neutral-500 p-5 underline underline-offset-2 ">
        <GithubIcon /> Kamp.us projeleri
      </div>
    </a>
  );
};
