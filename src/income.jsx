function Income({ income, setIncome, loading }) {
  // Add useEffect for validation
  useEffect(() => {
    if (income < 0) {
      setIncome(0);
    }
  }, [income, setIncome]);

  return (
    // ... existing JSX structure ...
  );
}