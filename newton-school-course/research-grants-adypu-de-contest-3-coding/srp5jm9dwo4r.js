SELECT
    researcher_id,
    researcher_name,
    department,
    grant_amount
FROM ResearchGrants rg
WHERE grant_amount > (
    SELECT AVG(grant_amount)
    FROM ResearchGrants
    WHERE department = rg.department
      AND researcher_id <> rg.researcher_id
)
ORDER BY
    department ASC,
    grant_amount DESC;