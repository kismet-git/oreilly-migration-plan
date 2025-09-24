// Simple replacement for class-variance-authority
export type ClassValue = string | number | boolean | undefined | null | ClassValue[]

export interface VariantProps<T> {
  [key: string]: any
}

export interface CVAConfig {
  variants?: Record<string, Record<string, string>>
  defaultVariants?: Record<string, string>
}

export function cva(base: string, config?: CVAConfig) {
  return (props?: Record<string, any>) => {
    let classes = base

    if (config?.variants && props) {
      Object.entries(config.variants).forEach(([variantKey, variantValues]) => {
        const propValue = props[variantKey] || config.defaultVariants?.[variantKey]
        if (propValue && variantValues[propValue]) {
          classes += " " + variantValues[propValue]
        }
      })
    }

    return classes.replace(/\s+/g, " ").trim()
  }
}
