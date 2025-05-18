const eventUrl = "https://mvp-eventservice-d9ech9f0dba3fbfe.swedencentral-01.azurewebsites.net/api/events"

export async function getEvents() {
  const response = await fetch(`${eventUrl}`)
  if (!response.ok) throw new Error("Failed to fetch events.")
  return response.json();
}