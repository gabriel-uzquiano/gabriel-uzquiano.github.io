import itertools

def generate_truth_table(variables, formulas, compute_formulas=False):
    header = " | ".join(variables) + " | " + " | ".join(formulas)
    print(header)
    print("-" * len(header))

    for values in itertools.product([True, False], repeat=len(variables)):
        env = {var: val for var, val in zip(variables, values)}
        row_vars = " | ".join('T' if env[v] else 'F' for v in variables)
        if compute_formulas:
            row_forms = []
            for f in formulas:
                expr = f.replace("~", "not ").replace("/\\", " and ").replace("\\/", " or ").replace("->", "<=").replace("<->", "==")
                val = eval(expr, {}, env)
                row_forms.append('T' if val else 'F')
            print(f"{row_vars} | " + " | ".join(row_forms))
        else:
            blanks = " | ".join(" " * len(f) for f in formulas)  # spaces matching formula string length
            print(f"{row_vars} | {blanks}")

def parse_input_list(prompt):
    user_input = input(prompt)
    items = [item.strip() for item in user_input.split(",") if item.strip()]
    return items

if __name__ == "__main__":
    print("Enter propositional variables separated by commas (e.g. p,q):")
    variables = parse_input_list("Variables: ")
    print("Enter formulas separated by commas (use ~ for 'not', /\\ for 'and', \\/ for 'or', -> for 'if ..., then ...', <-> for 'iff'):")
    formulas = parse_input_list("Formulas: ")

    print("\nPartial truth table (formulas blank):\n")
    generate_truth_table(variables, formulas, compute_formulas=False)

    # Uncomment below to print full truth table with formulas computed
    # print("\nFull truth table (formulas computed):\n")
    # generate_truth_table(variables, formulas, compute_formulas=True)
