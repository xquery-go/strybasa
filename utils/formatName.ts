export function formatName(str: string): string {
    let words = str.split(' '); // Разбиваем строку на слова
    if (words.length > 1) {
        return words[0].substring(0, 1) + words[1].substring(0, 1); // Возвращаем первые символы первых двух слов
    } else {
        return str.substring(0, 2); // Возвращаем первые две буквы, если в строке меньше двух слов
    }
}