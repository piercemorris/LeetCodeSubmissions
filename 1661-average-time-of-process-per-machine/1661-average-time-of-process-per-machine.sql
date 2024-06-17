# Write your MySQL query statement below
SELECT 
    machine_id,
    ROUND(
        AVG(
            CASE WHEN activity_type = 'start' THEN timestamp*-1 ELSE timestamp END
        ) * 2, 
    3) as processing_time
FROM Activity
GROUP BY machine_id