import twMerge from 'tw-merge';

type StyleValue = string | Record<string, string> | ((theme: Theme) => string | Record<string, string>);
type Theme = Record<string, Record<string, string>>;
type StyleObject<T> = {
  [K in keyof T]?: StyleValue;
};
type DefineStyleObject<T> = StyleObject<T> & {
  metadata?: {
    name?: string;
    version?: string;
    [key: string]: any;
  };
};

function applyTheme(styleValue: StyleValue, theme: Theme): string {
  if (typeof styleValue === 'string') {
    return styleValue;
  }

  if (typeof styleValue === 'function') {
    return applyTheme(styleValue(theme), theme);
  }

  const classNames = Object.entries(styleValue).flatMap(([key, value]) => {
    const baseClass = applyTheme(value, theme);
    return key.split(',').map((modifier) => `${modifier}:${baseClass}`);
  });

  return twMerge(...classNames);
}

function defineStylizer<T>(options?: {
  theme?: Theme | (() => Theme);
  styles?: DefineStyleObject<T>[];
}): (styleObj: StyleObject<T>) => string {
  const theme: Theme = typeof options?.theme === 'function' ? options.theme() : options?.theme || {};

  return (styleObj: StyleObject<T>): string => {
    const classNames = Object.entries(styleObj).map(([prop, value]) => {
      const styleValue = value ?? theme[prop];
      return applyTheme(styleValue as StyleValue, theme);
    });

    return twMerge(...classNames);
  };
}

function defineStyle<T>(
  styleObj: DefineStyleObject<T>,
  options?: {
    theme?: Theme | (() => Theme);
  }
): string {
  const stylizer = defineStylizer<T>(options);
  return stylizer(styleObj);
}

const button = defineStyle<any>({
    bgColor: {
        hover: 'bg-blue-500',
        active: 'bg-blue-600',
    }
})