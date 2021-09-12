const slideList = Array.from({ length: 30 }).map((_, i) => {
    return {
        id: i,
        title: `Block ${i + 1}`,
        images: Array.from({ length: 4 }).map(
            // eslint-disable-next-line @typescript-eslint/no-shadow
            (_, j) => `https://picsum.photos/1440/2842?random=${j}`
        )
    };
});

export { slideList };
