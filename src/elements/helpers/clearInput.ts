function clearInput(): void {
    const input: HTMLInputElement = document.getElementById(
        'search'
    ) as HTMLInputElement;
    input.value = '';
}

export default clearInput;