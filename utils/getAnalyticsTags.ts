import parseUserAgent from 'ua-parser-js'

export function getAnalyticsTags(tags: readonly string[] = []): string[] {
  const { browser, device, os } = parseUserAgent()

  return [
    `browser:${browser.name || 'unknown'}`,
    `device:${device.vendor || 'unknown'}`,
    `deviceType:${device.type || 'unknown'}`,
    `os:${os.name || 'unknown'}`,
    ...tags,
  ]
}
