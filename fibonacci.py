'''
Fibonacci endpoint handler (defined in swagger.yaml) 
'''

#from main import metrics


def fibonacci():
    '''
    Fibonacci sequence generator
    '''
    previous = (1, 1)
    yield previous[0]
    yield previous[1]

    while True:
        value = previous[0] + previous[1]
        yield value
        previous = [previous[1], value]


# @metrics.summary('generate_by_status', 'generate Request latencies by status', labels={
#    'code': lambda r: r.status_code
# })
def generate(terms: int) -> list:
    '''
    Given number of terms generate a sequence of fibonacci numbers. 
    '''
    numbers = []
    count = 0
    if terms < 1:
        return numbers

    # use generator to generate sequence
    for i in fibonacci():
        numbers.append(i)
        count += 1
        if count >= terms:
            break

    return numbers
