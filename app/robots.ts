import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Emit a static robots.txt at build time (required with `output: export`).
export const dynamic = 'force-static'

// AI answer-engine and assistant crawlers we explicitly welcome. Matching by a
// dedicated user-agent group makes the intent unambiguous — these bots should
// index and cite the site rather than fall through to the generic `*` rule.
const AI_CRAWLERS = [
  'GPTBot', // OpenAI training
  'OAI-SearchBot', // OpenAI / ChatGPT search
  'ChatGPT-User', // ChatGPT browsing on a user's behalf
  'ClaudeBot', // Anthropic training
  'Claude-User', // Claude browsing on a user's behalf
  'Claude-SearchBot', // Claude search
  'anthropic-ai', // Anthropic (legacy)
  'PerplexityBot', // Perplexity index
  'Perplexity-User', // Perplexity user fetch
  'Google-Extended', // Gemini / Vertex AI grounding
  'Applebot-Extended', // Apple Intelligence
  'Amazonbot', // Amazon / Alexa
  'CCBot', // Common Crawl (feeds many models)
  'cohere-ai', // Cohere
  'DuckAssistBot', // DuckDuckGo AI assist
  'MistralAI-User', // Mistral
  'Meta-ExternalAgent', // Meta AI
  'YouBot', // You.com
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
