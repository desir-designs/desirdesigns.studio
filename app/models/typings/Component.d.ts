import type { FC } from "react"

export interface IComponent<T> extends FC { }

export type ComponentType<T> = IComponent<T>