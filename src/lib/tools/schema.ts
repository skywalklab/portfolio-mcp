import { z } from 'zod';

export const QuerySchema = z
	.string()
	.trim()
	.describe('Search query from the user to find relevant content.')
	.default("Get Tommy Doak's work experience?");
