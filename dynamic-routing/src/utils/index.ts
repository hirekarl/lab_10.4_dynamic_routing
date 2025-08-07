export const timestampToDisplayDate = (timestamp: number): string => {
  const datetime = new Date(timestamp)
  return datetime.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Toronto",
  })
}
