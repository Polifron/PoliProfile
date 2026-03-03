export default function LanguageSelect({ value, onChange, className }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`${className} underline underline-offset-4`}
    >
      <option value="en" className="bg-background text-foreground">
        🇬🇧 ENG
      </option>
      <option value="ro" className="bg-background text-foreground">
        🇷🇴 RO
      </option>
    </select>
  )
}
