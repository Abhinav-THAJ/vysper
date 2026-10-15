export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{3})(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
