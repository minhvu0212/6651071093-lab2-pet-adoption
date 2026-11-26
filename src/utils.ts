export function formatCurrency(amount: number, currency?: string): string {
  const formatted = new Intl.NumberFormat('vi-VN').format(amount)
  return currency === 'VND' ? `${formatted} VND` : `${formatted} ₫`
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}...`
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout> | undefined
  const debounced = ((...args: Parameters<T>) => {
    if (timer !== undefined) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }) as T
  return debounced
}
