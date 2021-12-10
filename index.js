import { minify } from 'csso';

export default ({ file, options }) => {
  const { css } = minify(file.buffer.toString(), {
    filename: file.path,
    ...options
  });
  return { buffer: Buffer.from(`${css}\n`) };
};
