import pytest
from fibonacci import generate

def test_generate_negative():
    assert(generate(-1) == [])

def test_generate_zero():
    assert(generate(-1) == [])

def test_generate_first():
    assert(generate(1) == [1])

def test_generate_second():
    assert(generate(2) == [1,1])

def test_generate_third():
    assert(generate(3) == [1,1,2])
