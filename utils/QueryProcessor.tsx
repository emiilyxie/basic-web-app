export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Emily";
  }

  if (query.toLowerCase().includes("andrew")) {
    return "elx";
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      return Math.max(...numbers).toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length == 2) {
      return (numbers[0] + numbers[1]).toString();
    }
  }


  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length == 2) {
      return (numbers[0] * numbers[1]).toString();
    }
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length == 2) {
      return (numbers[0] - numbers[1]).toString();
    }
  }

  if (query.toLowerCase().includes("power")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length == 2) {
      return Math.pow(numbers[0], numbers[1]).toString();
    }
  }

  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      numbers.filter((num) => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      });
      return numbers.join(", ");
    }
  }

  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/\d+/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const isPrime = (num: number) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      numbers.filter(isPrime);
      return numbers.join(", ");
    }
  }

  return "";
}
