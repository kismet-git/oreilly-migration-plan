interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex h-16 items-center px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-card-foreground">{title}</h1>
      </div>
    </header>
  )
}
