const formatValue = (value: number | string): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value)); // TODO

export default formatValue;
