import type { Theme } from '@/lib/themes';
import { themes } from '@/lib/themes';

interface Config {
  theme?: Theme['name'];
  radius: number;
}

export function useThemes() {
  const { value: color } = useColorMode();
  const isDark = color === 'dark';

  const defaultTheme = useConfig().value.theme;
  const config = useCookie<Config>('theme', {
    default: () => ({
      theme: defaultTheme.color as Color,
      radius: defaultTheme.radius,
    }),
  });

  // Create an array of color values
  const allColors: Color[] = [
    'zinc',
    'rose',
    'blue',
    'green',
    'orange',
    'red',
    'slate',
    'stone',
    'gray',
    'neutral',
    'yellow',
    'violet',
  ];

  const theme = computed(() => config.value.theme);
  const radius = computed(() => config.value.radius);

  const themeClass = computed(() => `theme-${theme.value}`);

  function setTheme(themeName: Theme['name']) {
    config.value.theme = themeName;
  }

  function setRadius(newRadius: number) {
    config.value.radius = newRadius;
  }

  function setClassTheme() {
    document.body.classList.remove(
      ...allColors.map(color => `theme-${color}`),
    );
    document.body.classList.add(themeClass.value);
  }

  const themePrimary = computed(() => {
    const t = themes.find(t => t.name === theme.value);
    return `hsl(${t?.cssVars[isDark ? 'dark' : 'light'].primary})`;
  });

  return {
    themeClass,
    theme,
    setTheme,
    radius,
    setRadius,
    setClassTheme,
    allColors,
    themePrimary,
  };
}
