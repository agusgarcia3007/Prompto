"use client";
import { Button } from "@/components/ui/button";
import { IconSparkles } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { HeroHeader } from "./header";
import { Waitlist } from "./waitlist";
import { Badge } from "@/components/ui/badge";

export default function Landing() {
  const t = useTranslations("hero");

  return (
    <>
      <HeroHeader />
      <main>
        <section className="overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
          </div>

          <div className="py-20 md:py-32">
            <div className="relative z-10 mx-auto max-w-6xl px-6">
              <div className="relative text-center">
                <div className="mb-6 flex justify-center">
                  <Badge
                    variant="outline"
                    className="gap-1 border-primary px-2 py-1 text-sm font-medium"
                  >
                    <IconSparkles size={16} className="text-primary" />{" "}
                    {t("badge")}
                  </Badge>
                </div>

                <h1 className="mx-auto max-w-3xl text-balance text-5xl font-bold tracking-tight md:text-6xl">
                  {t.rich("title.default", {
                    highlight: (chunks) => (
                      <span className="text-primary">{chunks}</span>
                    ),
                  })}
                </h1>

                <p className="text-muted-foreground mx-auto my-6 max-w-2xl text-balance text-xl">
                  {t("subtitle")}
                </p>

                <div className="mt-10 max-w-md mx-auto">
                  <Waitlist />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
