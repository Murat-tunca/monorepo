import { ThemeToggle } from "@kampus/ui-next";

import {
  DiscordLink,
  GithubLink,
  KampusGithubLink,
  TwitchLink,
  TwitterLink,
} from "./features/Link";
import { streamers } from "./streamers";

type Streamer = {
  username: string;
  // live: boolean;
  // startedAt: string;
  // viewerCount: number;
};

export default function Tv() {
  const [usirin, ...kampusStreamers] = streamers;
  return (
    <div className="bg-background container mx-auto max-w-5xl py-10">
      <ThemeToggle />
      <div className="text-center">
        <div>
          <p>ortamlardaki pek $ukela yazılım topluluğu</p>
        </div>
        <div className="flex justify-center">
          <img
            className=" h-48 w-96 object-contain "
            src="https://kampus-logo.s3.eu-central-1.amazonaws.com/kampus_logo.png"
            alt="logo"
          />
        </div>
        <div>
          <p>bol pozitivite, motivasyon ve beraber gelişmek mottoları...</p>
        </div>
        <div>
          <p>discord.kamp.us diye bir sunuculari var, içerisi adeta şampiyonlar ligi.</p>
        </div>
        <div className="mt-6">
          <div className="flex flex-row justify-around gap-2 ">
            <div className="flex-1">
              <DiscordLink />
            </div>
            <div className="flex-1">
              <KampusGithubLink />
            </div>
          </div>
          <div>
            <h3 className=" text-justify  text-[36px]">usirin</h3>
            <div className="flex justify-center gap-2">
              <div className="flex-1">
                <TwitchLink
                  streamer={{
                    username: "usirin",
                  }}
                />
              </div>
              <div className="flex-1">
                <GithubLink username={"usirin"} />
              </div>
              <div className="flex-1">
                <TwitterLink username={"usirin"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between ">
          <h4 className=" text-[36px]">Kamp.us yayıncıları</h4>
          <h4 className="  self-end">yayında olan yayıncıları buradan takip edebilirsiniz</h4>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          {kampusStreamers.map((streamer: Streamer, index: number) => (
            <TwitchLink streamer={streamer} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
