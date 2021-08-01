export function brazilianCurrency(value) {
  if (!value || typeof value !== 'number') return value;

  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}
