import { NavLink } from 'react-router-dom'

function getDesktopClasses(isActive) {
  return [
    'border-b-2 pb-1 text-sm font-medium transition-colors',
    isActive
      ? 'border-blue-900 text-blue-900 dark:border-teal-400 dark:text-teal-300'
      : 'border-transparent text-black hover:text-black/70 dark:text-white dark:hover:text-white/75',
  ].join(' ')
}

function getMobileClasses(isActive) {
  return [
    'border-b-2 pb-1 pt-1 text-sm font-medium transition-colors',
    isActive
      ? 'border-blue-900 text-blue-900 dark:border-teal-400 dark:text-teal-300'
      : 'border-transparent text-black hover:text-black/70 dark:text-white dark:hover:text-white/75',
  ].join(' ')
}

export function DesktopNavLinks({ navItems }) {
  return (
    <div className="flex items-center gap-5">
      {navItems.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => getDesktopClasses(isActive)}>
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export function MobileNavLinks({ navItems, onItemClick }) {
  return (
    <div className="flex flex-col gap-1">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onItemClick}
          className={({ isActive }) => getMobileClasses(isActive)}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}
