export const getDate = (createdat: string) => {
    const date = new Date(createdat);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        weekday: 'long'
    });
    const parts = formattedDate.split(' ');
    const reorderedDate = `${parts[2]} ${parts[1]}, ${parts[0].replace(/.$/, "")}`
    return reorderedDate;
};