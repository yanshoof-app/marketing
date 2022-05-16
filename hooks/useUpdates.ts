export default function useUpdates() {
  return {
    version: process.env.NEXT_PUBLIC_VERCEL_VERSION,
    label: process.env.NEXT_PUBLIC_VERCEL_LABEL,
  }
}
