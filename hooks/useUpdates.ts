export default function useUpdates() {
  return {
    version: process.env.NEXT_PUBLIC_VERSION,
    label: process.env.NEXT_PUBLIC_LABEL,
  }
}
