/**
 * Error class used for user-facing CLI errors.
 *
 * The top-level catch in `bin/cli.ts` prints `message` directly without a
 * stack trace and exits with code 1. Use this for predictable failures
 * (invalid names, missing files, etc.) so users see a clean message instead
 * of a Node.js stack dump.
 */
export class BghitappError extends Error {
  readonly isUserError = true;

  constructor(message: string) {
    super(message);
    this.name = 'BghitappError';
  }
}

export function isBghitappError(error: unknown): error is BghitappError {
  return (
    error instanceof BghitappError ||
    (typeof error === 'object' &&
      error !== null &&
      (error as { isUserError?: boolean }).isUserError === true)
  );
}
