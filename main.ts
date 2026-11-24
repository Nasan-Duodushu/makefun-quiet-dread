// Two Days of Quiet Dread: the funniest one-line code review comment that
// approves a pull request with quiet existential dread.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'LGTM. The tests pass, the logic holds, and whatever wakes in production at 3 a.m. will at least be well-formatted.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
