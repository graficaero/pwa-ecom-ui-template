import { memo } from 'react'
import isEqual from 'react-fast-compare'
import type { QueryRuleCustomDataProvided } from 'react-instantsearch-core'
import { connectQueryRules } from 'react-instantsearch-dom'

function QueryRuleRedirectComponent({ items }: QueryRuleCustomDataProvided) {
  const match = items.find((data: any) => Boolean(data.redirect))
  if (match?.redirect) window.location.href = match.redirect
  return null
}

export const QueryRuleRedirect = connectQueryRules(
  memo(QueryRuleRedirectComponent, isEqual)
)
