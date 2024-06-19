interface TitleShortnerProps {
    text: string,
    limit: number
}

function titleShortner({text, limit}: TitleShortnerProps) {
    const last = limit - 1;
    let result = '';

    if (text.length >= limit + 3) {
        result = text.slice(0, last - 3) + '...';
    } else if (text.length >= limit + 2) {
        result = text.slice(0, last - 2) + '...';
    } else if (text.length >= limit + 1) {
        result = text.slice(0, last - 1) + '...';
    } else {
        result = text;
    }

    return result;
}