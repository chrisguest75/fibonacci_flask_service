

def fibonacci():
    previous = [1, 1]
    yield previous[0]
    yield previous[1]

    while True:
        value = previous[0] + previous[1]
        yield value
        previous = [previous[1], value]

def generate(terms):
    max = terms
    numbers = []
    count = 0
    for i in fibonacci():
        numbers.append(i)
        count += 1
        if count > max:
            break

    return numbers
    

