import type { SocialProps, ComponentProps } from "blakprint/typings"

export type HeroProps = ComponentProps<{
  title?: string,
  socials?: SocialProps[]
}>