const videoAssets = import.meta.glob<string>(
    '/src/content/projects/**/*.{mp4,webm,ogg}',
    {
        eager: true,
        import: 'default',
        query: '?url',
    },
);

export function resolveProjectVideo(
    entryFilePath: string | undefined,
    relativePath: string,
) {
    if (!entryFilePath || !relativePath.startsWith('./')) {
        return relativePath;
    }

    const normalizedFilePath = entryFilePath.replaceAll('\\', '/');
    const sourcePathStart = normalizedFilePath.indexOf('src/content/projects/');

    if (sourcePathStart === -1) {
        return relativePath;
    }

    const contentPath = normalizedFilePath.slice(sourcePathStart);
    const directory = contentPath.slice(0, contentPath.lastIndexOf('/'));
    const assetKey = `/${directory}/${relativePath.slice(2)}`;

    return videoAssets[assetKey] ?? relativePath;
}
