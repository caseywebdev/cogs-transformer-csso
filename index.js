import csso from 'csso';

export default ({ file, options }) => {
  const { css } = csso.minify(file.buffer, { filename: file.path, ...options });
  return { buffer: Buffer.from(`${css}\n`) };
};
