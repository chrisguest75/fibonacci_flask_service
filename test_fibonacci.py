import pytest
from fibonacci import generate

def test_generate_negative():
    assert(generate(-1) == [])
    